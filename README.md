<div align="center">
      <h1> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhUp7hy6gt1_D8JixIm9n7Wxzt9T1xHMZPAeXc_-djtGVKPDsvQbvko5hXJfnTHJsKb1kpGAEi0CRavljhWqRQweeCyFtX5rXMhxLS3r8pZDmkcy_lJxcIT5Fh7mtlQglUZjPdqPM_Q2OhJ-D4h-zCVHATkcEHI1RCRwMb2P22em2zJtR2c6FBgoGfBbs/s16000/logo.png" width="80px"><br/>PixelMage</h1>
     </div>
<p align="center"> <a href="https://www.onlyakarsh.com" target="_blank"><img alt="" src="https://img.shields.io/badge/Website-EA4C89?style=normal&logo=dribbble&logoColor=white" style="vertical-align:center" /></a> <a href="https://twitter.com/only_akarsh" target="_blank"><img alt="" src="https://img.shields.io/badge/Twitter-1DA1F2?style=normal&logo=twitter&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.instagram.com/mayank__arc" target="_blank"><img alt="" src="https://img.shields.io/badge/Instagram-E4405F?style=normal&logo=instagram&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.linkedin.com/in/akarsh3053}" target="_blank"><img alt="" src="https://img.shields.io/badge/LinkedIn-0077B5?style=normal&logo=linkedin&logoColor=white" style="vertical-align:center" /></a> </p>

# Description

PixelMage is a straightforward Software as a Service (SaaS) platform crafted with modern technologies including Next.js, React, Node.js, and Tailwind CSS, among others. It leverages Clerk for user management, allowing seamless authentication and authorization processes. For handling transactions, PixelMage integrates Stripe as its payment gateway, ensuring secure and efficient purchases. Additionally, the platform utilizes Cloudinary's API to drive its AI-powered image editing functionalities, empowering users with advanced editing capabilities.

# Features

The app has a modern and intuitive UI with features like responsive layouts and pagination to improve user experience. Some of its distinct features are -

- Object Removal
- Object Recoloring
- Image Restoration
- Responsive and modern UI
- Generative fill to change the image aspect ratio
- Object and content-based search for recent edits page.

# Screenshots

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS6dOS6bE_nGbPADlh0Ozxz8lGH2hoZKoefRO_wFWaFoJEqeHnrDpSPJiqSyoiwiMnbQ2F_WqMgYCwRiqcx-gY_h94F0RIFuRA5pg0kS1vcfskHcK4WCWWhswTqk8NqFmkhnZa0TSjhEUZJmFDsxDrXzbmEyAGtxZw_mNDnS38MW9x38cw32UKlGZqeQ0/s16000/home.png"> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRVPlRvxxHLl1HPi-jah6X9lyx0671DohsOhP16c7KUF3N4ffl9fHJ6qDkGcXt4nZYsqHwNAwin3v8gAHBOndazwiKR3FX2IKOtI0kv3sSzNTNQymVT82Gc5rgdnp3HfIBm8gm7wAjU9R56qNDCDEQfuxrBgIdPSKHFQOdv_fgdJHNCVzFN-rAOefI50c/s16000/profile.png"> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8gohfpU5VnyB59KCjo3YQ-R0n8AHdPQXJr_bQ3pjRcsUg_UVY3naIWuQB5bH2biJnn2rxumgH_D5wruM8dcMkiKHLZJl3ZTtBYoPYgq8YTZmjsBa16xkgWfKLbw1w0EshACPju6L9ZRpsTWOuWqtKfBnUgXVvWLlXakWi7oI8lxTS_f4ZBIuILV1X6G0/s16000/plans.png">

# Tech Used

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

# Got any ideas?

### Here's how you can contribute to `OwlDone`

To contribute set up the local environment, develop and test your feature, or fix any existing bug. Once you are happy with your work, go ahead and raise a pull request, I'll be happy to merge any constructive change to the project, making it more awesome✌️.

### Setup:

- Clone the repository

```bash
https://github.com/Akarsh3053/PixelMage
```

- Install the dependencies

```bash
npm install
```

##### Setup all the webhooks and point them to correct endpoints for srtipe and clerk.

### API references

| Syntax                              | Description                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| MONGODB_URL                         | Connection string to your mongoDB Atlas instance.                                                          |
| CLERK_SECRET_KEY                    | Clerk is used for auth and user management, get keys from <a href="https://dashboard.clerk.com/">here.</a> |
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY   | Clerk auth provider API key from Clerk.                                                                    |
| WEBHOOK_SECRET                      | Webhook secret for clerk webhook.                                                                          |
| STRIPE_SECRET_KEY                   | API key for payment gateway, get it from <a href="https://docs.stripe.com/api">here.</a>                   |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  | Stripe API key public.                                                                                     |
| STRIPE_WEBHOOK_SECRET               | Webhook for checkout events.                                                                               |
| NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME   | Cloudinary cloud name for your service.                                                                    |
| CLOUDINARY_API_KEY                  | Cloudinary API key                                                                                         |
| CLOUDINARY_API_SECRET               | API secret key for cloudinary API                                                                          |
| NEXT_PUBLIC_CLERK_SIGN_IN_URL       | /sign-in                                                                                                   |
| NEXT_PUBLIC_CLERK_SIGN_UP_URL       | /sign-up                                                                                                   |
| NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL | /                                                                                                          |
| NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL | /                                                                                                          |

- Run local instance

```bash
npm run dev
```

### If everything goes well, the app will be runing at:

- <a href="http://localhost:3000">http://localhost:3000</a>
