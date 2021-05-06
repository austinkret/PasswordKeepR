const CopyToClipboard = function (id) {
  let r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('Success! Copied Password to Clipboard.');
};
