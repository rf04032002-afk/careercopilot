import {
  getDocument,
  GlobalWorkerOptions,
} from "pdfjs-dist";

GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

export async function parseResume(file: File) {
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await getDocument({
    data: arrayBuffer,
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    const content = await page.getTextContent();

    const pageText = content.items
      .map((item: any) => ("str" in item ? item.str : ""))
      .join(" ");

    text += pageText + "\n";
  }

  return {
    text,
    pages: pdf.numPages,
  };
}