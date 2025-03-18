import type { PageProps } from "../page";

function Page({ title, children }: PageProps) {
  return <div>{children}</div>
}

export default Page;
