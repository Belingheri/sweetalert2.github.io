const threeButtonsDialogSrc = "import Swal from 'sweetalert2'\nimport './style.css'\n\nSwal.fire({\n  title: 'Do you want to save the changes?',\n  showDenyButton: true,\n  showCancelButton: true,\n  confirmButtonText: 'Yes',\n  denyButtonText: 'No',\n  customClass: {\n    actions: 'my-actions',\n    cancelButton: 'order-1 right-gap',\n    confirmButton: 'order-2',\n    denyButton: 'order-3',\n  },\n}).then((result) => {\n  if (result.isConfirmed) {\n    Swal.fire('Saved!', '', 'success')\n  } else if (result.isDenied) {\n    Swal.fire('Changes are not saved', '', 'info')\n  }\n})\n";

export { threeButtonsDialogSrc as default };
