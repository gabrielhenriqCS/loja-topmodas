create extension if not exists pgcrypto;

-- Administradores
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  role text not null default 'admin'
    check (role in ('admin')),
  password text not null,
  created_at timestamptz not null default now()
);

-- Categorias
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Catálogos
create table if not exists public.catalogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  cover_image text,
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Produtos
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id),
  title text not null,
  slug text not null unique,
  description text,
  price numeric(10,2) not null check (price >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Fotos
create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  image_url text not null,
  position integer not null default 0
);

-- Tamanhos e estoque informativo
create table if not exists public.product_sizes (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  size text not null,
  stock_quantity integer not null default 0
    check (stock_quantity >= 0),
  active boolean not null default true,
  unique(product_id, size)
);

-- Produtos que pertencem aos catálogos
create table if not exists public.catalog_products (
  catalog_id uuid references public.catalogs(id) on delete cascade,
  product_id uuid references public.products(id) on delete cascade,
  position integer not null default 0,
  primary key (catalog_id, product_id)
);

-- Eventos de navegação e conversão
create table if not exists public.product_events (
  id bigint generated always as identity primary key,
  product_id uuid not null references public.products(id),
  event_type text not null
    check (event_type in ('product_view', 'whatsapp_click')),
  created_at timestamptz not null default now()
);

-- Índices para performance
create index if not exists idx_products_category
  on public.products(category_id);

create index if not exists idx_product_events_product_date
  on public.product_events(product_id, created_at);
