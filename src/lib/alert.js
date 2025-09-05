import Swal from "sweetalert2";

export const alertSuccess = async(message) => {
    return Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message
    })
}

export const alertError = async(message) => {
    return Swal.fire({
        icon: 'error',
        title: 'Ups',
        text: message
    })
}

export const alertConfirm = async(message) => {
    const result = await Swal.fire({
        icon: 'question',
        title: 'Are you sure?',
        text: message,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#0c7ad6',
    })
    return result.isConfirmed;
}