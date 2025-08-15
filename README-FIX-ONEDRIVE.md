# OneDrive fix for Next.js on Windows

This project is configured to avoid Next.js deleting symlink-like entries that OneDrive creates:
- Uses `distDir: 'build'` instead of `.next`
- `cleanDistDir: false` (we clean manually with `rimraf`)
- Scripts run `rimraf .next build` before `next dev` and `next build`

## Commands
```powershell
npm install
npm run dev
```
If you still see errors, move the project outside OneDrive (e.g., `D:\dev\wagner-driver-site`) and run again.
