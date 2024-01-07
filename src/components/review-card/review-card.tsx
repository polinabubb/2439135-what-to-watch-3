import type { Comment } from '../../types/reviews.ts';
type RewievProps = {
  rewiev: Comment;
};

export function ReviewCard({ rewiev }: RewievProps): JSX.Element {
  const d = new Date(rewiev.date);
  const locale = 'en-us';
  const date = `${d.toLocaleString(locale, {
    month: 'long',
  })} ${d.getDate()}, ${d.getFullYear()}`;

  return (
    <div className="review" data-testid="review">
      <blockquote className="review__quote">
        <p className="review__text">{rewiev.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{rewiev.user}</cite>
          <time className="review__date" dateTime={date}>
            {date}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rewiev.rating}</div>
    </div>
  );
}
export default ReviewCard;
