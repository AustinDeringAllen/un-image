import Modal from "@/components/Modal";
import Image from "next/image";

const ImageModal = ({ params }: { params: { id: string } }) => {
  return (
    <Modal title={params.id} preOpen>
      <Image
        src={`https://giibmeyimrzkhcpzstdv.supabase.co/storage/v1/object/public/images/${params.id}`}
        width={960}
        height={540}
        alt={params.id}
        className="w-full h-auto"
      />
    </Modal>
  );
};

export default ImageModal;
