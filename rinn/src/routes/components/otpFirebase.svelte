
export let data
console.log(data)
let loading = false

const {
  recaptchaValidStore,
  confirmationResultStore,
  userStore,
  phoneSignIn,
  verifyCode,
  signOutAsync
} = data.auth

let countryCode = ""
let phoneNumberBody = ""

$: countryCodeValid = countryCode !== null && countryCode.length !== 0
$: phoneNumberBodyValid =
  phoneNumberBody !== null && phoneNumberBody.length !== 0

$: phoneNumberFormValid =
  $recaptchaValidStore && countryCodeValid && phoneNumberBodyValid && !loading

async function handlePhoneSubmit() {
  if (!phoneNumberFormValid) {
    return
  }

  loading = true

  const fullPhoneNumber = `+${countryCode + phoneNumberBody}`

  await phoneSignIn(fullPhoneNumber)

  loading = false
}

let OTPCode = ""

$: OTPFormValid =
  OTPCode !== null &&
  OTPCode.length === 6 &&
  !loading &&
  $confirmationResultStore !== null

async function handleOTPSubmit() {
  if (!OTPFormValid) {
    return
  }

  loading = true

  try {
    await verifyCode(OTPCode)
  } catch (error) {
    console.log(error)
  }

  loading = false
}
