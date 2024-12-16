import MauNhaDepDetail from "@/components/MauNhaDep/Detail"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const parseData = JSON.parse(decodeURIComponent(slug));
  return <div>
    <MauNhaDepDetail data={parseData} />
  </div>
}