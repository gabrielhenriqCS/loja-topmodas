import React from "react";

export default function GoogleMapFrame({
  title = "Localização da Top Modas",
  height = 180,
}: {
  title?: string;
  height?: number;
}) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-800 shadow-sm">
      <iframe
        title={title}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4940.087135749952!2d-38.611688724124285!3d-3.7886959434837086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74df82fadf259%3A0x5d4e7e2cb844ae0!2sTop%20Modas!5e1!3m2!1spt-BR!2sbr!4v1793371016832!5m2!1spt-BR!2sbr"
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}
