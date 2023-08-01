<!-- src/routes/OTPVerification.svelte
<script>
    import { onMount } from 'svelte';
    import firebase from '../../firebase';
  
    let phoneNumber = '';
    let otpCode = '';
    let confirmationResult = null;
  
    async function sendOTP() {
      try {
        confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber);
        alert('OTP Sent!');
      } catch (error) {
        alert('Error sending OTP: ' + error.message);
      }
    }
  
    async function verifyOTP() {
      try {
        const credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, otpCode);
        await firebase.auth().signInWithCredential(credential);
        alert('OTP Verified! You are now logged in.');
        // You can redirect the user to the authenticated part of your app
      } catch (error) {
        alert('Error verifying OTP: ' + error.message);
      }
    }
  
    // Cleanup the confirmationResult when component is unmounted
    onMount(() => {
      return () => {
        confirmationResult = null;
      };
    });
  </script>
  
  <main>
    <h1>OTP Verification</h1>
    <form>
      <input type="text" bind:value={phoneNumber} placeholder="Enter your phone number" />
      <button type="button" on:click={sendOTP}>Send OTP</button>
  
      {#if confirmationResult}
        <div>
          <input type="text" bind:value={otpCode} placeholder="Enter OTP" />
          <button type="button" on:click={verifyOTP}>Verify OTP</button>
        </div>
      {/if}
    </form>
  </main>
   -->