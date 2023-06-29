'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useLocalStorage<null | boolean>('cookie_consent', null);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue
    });
  }, [cookieConsent]);

  //   <Dialog
  //   open={open}
  //   TransitionComponent={Transition}
  //   keepMounted
  //   fullWidth
  //   maxWidth={false}
  //   PaperProps={{
  //     sx: {
  //       position: 'absolute',
  //       bottom: 0
  //     }
  //   }}
  //   onClose={handleClose}
  //   aria-describedby="alert-dialog-slide-description"
  // >
  //   <DialogTitle>{"Use Google's location service?"}</DialogTitle>
  //   <DialogContent>
  //     <DialogContentText id="alert-dialog-slide-description">
  //       Let Google help apps determine location. This means sending
  //       anonymous location data to Google, even when no apps are running.
  //     </DialogContentText>
  //   </DialogContent>
  //   <DialogActions>
  //     <Button onClick={handleClose}>Disagree</Button>
  //     <Button onClick={handleClose}>Agree</Button>
  //   </DialogActions>
  // </Dialog>

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/info/cookies" />
        <p>
          We use <span className="font-bold text-sky-400">cookies</span> on our site.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
