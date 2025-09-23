import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function ProfileUpdate({ open }: { open: boolean }) {
  const [image, setImage] = useState<string>();
  const [cropped, setCropped] = useState<string>();
  const cropperRef = useRef<HTMLImageElement>(null);

  // Handle file input
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
      setCropped(undefined); // reset preview
    }
  };

  // Crop and generate preview
  const cropImage = () => {
    const cropper = (cropperRef.current as any)?.cropper;
    if (!cropper) return;
    const croppedDataUrl = cropper.getCroppedCanvas().toDataURL("image/webp");
    setCropped(croppedDataUrl);
  };

  // Submit handler (send blob to server)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cropper = (cropperRef.current as any)?.cropper;
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob: Blob | null) => {
        if (blob) {
          console.log(blob);
        }
      }, "image/webp");
    }
  };

  useEffect(() => {
    setImage(undefined);
    setCropped(undefined);
  }, [open]);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Profile Photo</DialogTitle>
        <DialogDescription>
          You can select up to <strong>2MB</strong> only for your new profile
          photo.
        </DialogDescription>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {!cropped && (
              <Input type="file" accept="image/*" onChange={onFileChange} />
            )}
            {/* Cropper */}
            {image && !cropped ? (
              <Cropper
                src={image}
                style={{ height: 300, width: "100%" }}
                aspectRatio={1} // Square crop for profile
                guides={false}
                viewMode={1}
                dragMode="move"
                scalable={true}
                zoomable={true}
                cropBoxResizable={true}
                ref={cropperRef}
              />
            ) : (
              cropped && (
                <div>
                  <Button
                    onClick={() => setCropped(undefined)}
                    className="bg-black hover:bg-neutral-800"
                  >
                    <ArrowLeft />
                    <span>Crop again</span>
                  </Button>
                  <p className="mb-1 font-semibold">Preview:</p>
                  <img
                    src={cropped}
                    alt="Cropped avatar"
                    className="object-cover"
                  />
                </div>
              )
            )}
            {image && (
              <div className="flex gap-2 justify-end">
                {image && !cropped ? (
                  <Button
                    type="button"
                    onClick={cropImage}
                    className="px-4 py-1 bg-black hover:bg-neutral-800"
                  >
                    Crop
                  </Button>
                ) : (
                  <Button type="submit" className="px-4 py-1">
                    Save
                  </Button>
                )}
              </div>
            )}
          </form>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}

export default ProfileUpdate;
