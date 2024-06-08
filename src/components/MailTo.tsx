import { SendMail } from "iconoir-react";

export default function MailTo() {
  return (
    <a href="mailto:camisetasnanni@gmail.com?subject=Camisetas Nanni | Consultas" className="cursor-pointer fixed bottom-10 size-12 rounded-md right-10 z-10 grid place-content-center text-color-500 group">
      <SendMail className="size-10 group-hover:translate-x-3 transition-all" />
    </a>
  )
}