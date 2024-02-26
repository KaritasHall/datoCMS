import Image from "next/image";
import Link from "next/link";
import { useCart, CartItem } from "@/app/hooks/useCart";
import { CloseButton } from "@/app/components/close-button";
import { formatPrice } from "@/app/utils/format-price";
import { ItemCounter } from "../../item-counter";

interface MiniCartCardProps {
  cartItem: CartItem;
}

const MiniCartCard = ({ cartItem }: MiniCartCardProps) => {
  const { removeFromCart, showItemQuantity } = useCart();

  const cartProduct = cartItem?.product;
  const cartProductId = cartItem?.product.id;

  const cartQuantity = showItemQuantity(cartProductId);

  // Calculate the total price of a product
  const totalPrice = cartProduct?.lowestPrice
    ? cartProduct.lowestPrice * cartQuantity
    : 0;

  return (
    <div className="flex justify-between gap-[60px] py-24 font-inter">
      <div className="flex gap-16">
        <div className="h-96 w-80">
          <Link href={`/${cartItem?.product.slug}`}>
            {cartProduct.listImage && (
              <Image
                src={cartProduct.listImage}
                alt={cartProduct.title}
                className="h-full w-full object-cover"
                width={255}
                height={255}
              />
            )}
          </Link>
        </div>
        <div className="flex w-fit flex-col gap-8 lg:w-[210px]">
          <h2 className="line-clamp-1 text-sm font-semibold leading-6 tracking-wide text-black07">
            {cartProduct.title}
          </h2>
          {cartItem?.product.variants && (
            <p className="text-label text-black04">
              {cartProduct.variants[0].title}
            </p>
          )}
          <ItemCounter productId={cartProductId} />
        </div>
      </div>

      <div className="flex w-full flex-col items-end gap-12">
        <p className="w-full text-right font-inter text-sm font-semibold leading-6">
          {formatPrice(totalPrice)}
        </p>
        <div className="flex w-fit">
          <CloseButton
            onClick={() => removeFromCart(cartProductId)}
            aria-label="Remove product from cart"
          />
        </div>
      </div>
    </div>
  );
};
export default MiniCartCard;
