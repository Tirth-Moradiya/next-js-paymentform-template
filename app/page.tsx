import PaymentForm from "./components/PaymentForm";

export default function Home() {
  return (
    <div className="bg-[#12372A] min-h-screen overflow-hidden">
      <div className="text-5xl pt-14 text-center text-white font-extrabold">
        <h1>Card Payment</h1>
        <h1>Checkout Form</h1>
      </div>
      <div className="flex justify-center mt-[89px]">
        <PaymentForm />
      </div>
    </div>
  );
}
