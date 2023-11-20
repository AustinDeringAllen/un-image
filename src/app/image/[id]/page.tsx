import Image from "next/image";

const ImagePage = ({ params }: { params: { id: string } }) => {
  return (
    <main className="max-w-screen-lg max-h-screen mx-auto">
      <Image
        src={`https://giibmeyimrzkhcpzstdv.supabase.co/storage/v1/object/public/images/${params.id}`}
        width={1920}
        height={1080}
        alt={params.id}
        className="w-full h-auto"
      />
    </main>
  );
};

export default ImagePage;
