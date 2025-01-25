import BlogSection from "@/components/HomePage/Blog_Section/BlogSection";
import GallerySection from "@/components/HomePage/Gallery_Section/GallerySection";
import HotelViewCarousel from "@/components/Carousel/Hotel_View_Carousel/HotelViewCarousel";
import BookingWidget from "@/components/HomePage/Booking_Widget/BookingWidget";

export default function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[75vh]"
        style={{
          backgroundImage: "url('/assets/images/hotel_view/View/lakeView.jpg')",
          // boxShadow: "30px 30px 10px rgb(26, 26, 240)",
        }}
      ></div>
      <BookingWidget />

      <HotelViewCarousel />
      <BlogSection />
      <GallerySection />
    </div>
  );
}
