import { MainNav } from "@/components/HomePage/Navbar/Main_Nav";

export default function Home() {
  return (
    <div>
      <MainNav />
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/assets/images/wholeView.jpg')" }}
      >
        <h1>Welcome to Our Website</h1>
        <p>This is a page with a background image.</p>
      </div>
    </div>
  );
}
