import { useRef } from "react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { FileIcon, UploadCloud, X } from "lucide-react";
import { Button } from "./ui/button";





function LogoImageUpload({logo, isEditmode, setLogo}) {
    const inputRef = useRef(null);

    
    function handleImageFileUpload(event){
           console.log(event.target.files);
           const selectedImageFiles = event.target.files?.[0];
           if(selectedImageFiles) setLogo(selectedImageFiles)
        
    }
    function handleDragOver(event){
       event.preventDefault();
    }

    function handleDrop(event){
      event.preventDefault();
      const dropFiles = event.dataTransfer.files?.[0];
      if(dropFiles) setLogo(dropFiles)

    }

    function handleRemoveImage(event){
    setLogo(null)
     if (inputRef.current) {
      inputRef.current.value = "";
    }
    }
  console.log(logo);
  
    return ( 
        <div className="w-full max-w-md">
            <label htmlFor="" className="text-lg font-semibold mb-2 block">Upload Image</label>
            <div className="border-2 border-dashed rounded-lg p-4" onDragOver={handleDragOver}
        onDrop={handleDrop}>
                <Input 
                id='image-upload'
                type='file'
                className='hidden'
                ref={inputRef}
                onChange={handleImageFileUpload}
                // disabled={isEditode} 
                />
                {!logo ? (
          <Label
            htmlFor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloud className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) :  <div className="flex items-center justify-baseline">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
              <p>{logo.name}</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                onClick={handleRemoveImage}
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Remove File</span>
              </Button>
            </div>
          </div>
     }
            </div>
        </div>
     );
}

export default LogoImageUpload;