import BlogSection from "@/components/HomePage/Blog_Section/BlogSection";
import GallerySection from "@/components/HomePage/Gallery_Section/GallerySection";
import HotelViewCarousel from "@/components/Carousel/Hotel_View_Carousel/HotelViewCarousel";
import BookingWidget from "@/components/HomePage/Booking_Widget/BookingWidget";

export default function Home() {
  return (
    <div>
      <BookingWidget />
      <div
        className="bg-cover bg-center h-[calc(100vh-10rem)]"
        style={{
          backgroundImage: "url('/assets/images/hotel_view/View/lakeView.jpg')",
          // boxShadow: "30px 30px 10px rgb(26, 26, 240)",
        }}
      ></div>

      <HotelViewCarousel />
      <BlogSection />
      <GallerySection />
    </div>
  );
}
