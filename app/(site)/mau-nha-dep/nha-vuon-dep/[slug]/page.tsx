import MauNhaDepDetail from "@/components/MauNhaDep/Detail"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <div>
    <MauNhaDepDetail id={slug} />
  </div>
}