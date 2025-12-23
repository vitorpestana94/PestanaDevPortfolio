"use client";

export default function FooterFormTitle({ title }: { title: string }) {
  return (
    <h2 id="email" className="text-white text-[1rem] sm:text-[1.25rem]">
      {title}
    </h2>
  );
}
