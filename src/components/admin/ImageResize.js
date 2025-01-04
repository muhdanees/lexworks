export default class ImageResize {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options || {};
    this.img = null; // The currently selected image
    this.box = null; // The resize overlay
    this.init();
  }

  init() {
    // Listen for clicks on images
    this.quill.root.addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
        this.showResizeBox(event.target);
      } else {
        this.hideResizeBox();
      }
    });

    // Remove the resize box on editor blur
    document.addEventListener("click", (event) => {
      if (!this.quill.root.contains(event.target) && this.box) {
        this.hideResizeBox();
      }
    });
  }

  showResizeBox(img) {
    this.img = img;
    this.hideResizeBox(); // Remove any existing resize box
    this.createResizeBox();
  }

  hideResizeBox() {
    if (this.box) {
      this.box.remove();
      this.box = null;
    }
  }

  createResizeBox() {
    this.box = document.createElement("div");
    this.box.style.position = "absolute";
    this.box.style.border = "1px dashed #ccc";
    this.box.style.zIndex = 1000;

    const imgRect = this.img.getBoundingClientRect();
    this.box.style.left = `${imgRect.left + window.scrollX}px`;
    this.box.style.top = `${imgRect.top + window.scrollY}px`;
    this.box.style.width = `${imgRect.width}px`;
    this.box.style.height = `${imgRect.height}px`;

    document.body.appendChild(this.box);

    this.createResizeHandles();
  }

  createResizeHandles() {
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.width = "10px";
    resizeHandle.style.height = "10px";
    resizeHandle.style.background = "#fff";
    resizeHandle.style.border = "1px solid #000";
    resizeHandle.style.cursor = "nwse-resize";
    resizeHandle.style.right = "-5px";
    resizeHandle.style.bottom = "-5px";

    resizeHandle.addEventListener("mousedown", (event) => this.startResize(event));

    this.box.appendChild(resizeHandle);
  }

  startResize(event) {
    event.preventDefault();
    const imgRect = this.img.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;

    const onMouseMove = (e) => {
      const newWidth = imgRect.width + (e.clientX - startX);
      const newHeight = imgRect.height + (e.clientY - startY);

      this.img.style.width = `${newWidth}px`;
      this.img.style.height = `${newHeight}px`;

      this.box.style.width = `${newWidth}px`;
      this.box.style.height = `${newHeight}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
}
