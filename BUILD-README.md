# Construction Website - Next.js Build Instructions

## 🏗️ Production Build

To build the website for production deployment:

```bash
npm run build
```

This will:
- Create an optimized production build in the `.next` directory
- Generate static pages for all routes
- Compile TypeScript files
- Optimize images and assets
- Create a production-ready version

## ▶️ Running Production Server

After building, start the production server:

```bash
npm start
```

This will start the Next.js production server on port 3000.

## 🚀 Deployment

The built application can be deployed to any Node.js hosting platform:
- Vercel (recommended)
- Netlify
- AWS
- Azure
- DigitalOcean
- Any Node.js hosting provider

## 📁 Build Output

The build process creates:
- `.next/` directory with compiled assets
- Static pages for fast loading
- Optimized JavaScript bundles
- Server-side rendering capabilities

## 🔧 Environment Configuration

For production deployment, set these environment variables:
- `NODE_ENV=production`
- Any custom environment variables your app uses

## 🛡️ Security Notes

- The admin area is protected with client-side authentication
- In a real production environment, implement server-side authentication
- Use HTTPS for secure communication
- Regularly update dependencies

## 📈 Performance

The production build includes:
- Code splitting for faster loading
- Image optimization
- CSS minification
- JavaScript minification
- Static site generation where possible

## 🔄 Continuous Deployment

For automated deployments:
1. Connect your Git repository to your hosting provider
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Set up environment variables
4. Enable automatic deployments on push

## 🆘 Troubleshooting

If build fails:
1. Check for TypeScript errors
2. Verify all dependencies are installed: `npm install`
3. Clear build cache: Delete `.next` directory
4. Check Node.js version compatibility

## 📞 Support

For deployment assistance, contact your hosting provider's support team.