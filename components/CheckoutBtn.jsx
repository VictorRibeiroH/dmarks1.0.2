import Link from "next/link"
import { useShoppingCart } from "use-shopping-cart";

const CheckoutBtn = () => {
  const { cartDetails } = useShoppingCart();

  const generateWhatsAppMessage = () => {
    // Monta a mensagem do WhatsApp com os detalhes do carrinho
    let message = "Olá, vim pelo site e gostaria de cotação dos produtos:\n";

    Object.values(cartDetails).forEach(item => {
      message += `- ${item.quantity}x ${item.name}\n`;
    });

    // Codifica a mensagem para URL
    return encodeURIComponent(message);
  }

  return (
    <Link href={`https://wa.me/5541991625742?text=${generateWhatsAppMessage()}`} target="_blank" className="btn btn-primary w-full">Solicite seu orçamento!</Link>
  )
}

export default CheckoutBtn;