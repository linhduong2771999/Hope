import Swal from 'sweetalert2';

export const errorPopup = ({
    title = "Oops", 
    text = "Something went wrong. Please try again later!", 
    confirmButtonText = "Confirm"
}) => {
    Swal.fire({
        title,
        text,
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: '#c82333',
        confirmButtonText
      })
}

export const successPopup = ({
    title = "Success", 
    text = "Action successful", 
    timer = 1500
}) => {
    Swal.fire({
        title,
        text,
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        timer
      })
}

export const warningPopup = ({
    title = "Are you sure?", 
    text = "You won't be able to revert this!", 
    confirmButtonText = "Yes, confirm!"
}) => {
    return new Promise((resolve, reject) => {
        Swal.fire({
            title,
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText
        })
        .then((result) => {
            resolve(result) // result.isConfirmed
        }) 
    })
}

export const customPopup = ({
    title = "Are you sure?",
    text = "You won't be able to revert this!",
    icon = "warning",
    showCancelButton = true,
    confirmButtonColor = "#3085d6",
    cancelButtonColor = "#d33",
    confirmButtonText = "Confirm"
}) => {
    return new Promise((resolve, reject) => {
        Swal.fire({
            title,
            text,
            icon,
            showCancelButton,
            confirmButtonColor,
            cancelButtonColor,
            confirmButtonText
          }).then((result) => {
                resolve(result) // result.isConfirmed
          })
    })
}

export const timerIntervalPopup = ({
    title = "Auto close alert!",
    html = "I will close in <strong></strong> seconds.",
    text = "Auto text",
    timer = 4000,
    timerProgressBar = true,
}) => {
    return new Promise((resolve, reject) => {
        let timerInterval
        Swal.fire({
          title,
          html: `${html} <strong style="font-weight: bold"></strong> seconds.`,
          text,
          timer,
          timerProgressBar,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getHtmlContainer()
              if (content) {
                const b = content.querySelector('strong')
                if (b) {
                  b.textContent = Math.ceil(Swal.getTimerLeft() / 1000)
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            resolve(result)
          }
        })
    })
}
