export const downloadFile =  (fileContent, contentType, fileName) => {
  const blob = new Blob([ fileContent], { type: contentType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};