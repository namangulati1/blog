import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to NamanBlog</h1>
      <p className="text-lg mb-2">
        We are a team of passionate developers who are dedicated to providing the best
        service possible. Our mission is to deliver high-quality products that meet the
        needs of our customers. We believe in innovation, integrity, and customer satisfaction.
      </p>
      <p className="text-lg mb-2">
        Our team is committed to excellence and is always looking for ways to improve our
        services. We are constantly learning and growing, and we strive to be the best at
        what we do.
      </p>
      <p className="text-lg">
        Thank you for visiting our site. We hope you find what you are looking for and enjoy
        your experience with us.
      </p>
    </div>
  );
}
