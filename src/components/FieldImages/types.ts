type ImageFn = (image: File) => Promise<void> | void;

export type FieldImagesProps = {
  onChange: ImageFn;
  onRemove: ImageFn;
  images: Array<File>;
};
