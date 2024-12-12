import CamNangDetail from "@/components/CamNang/components/CamNangDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const parseData = JSON.parse(decodeURIComponent(slug));
  return <CamNangDetail dataDetail={parseData} />;
}
