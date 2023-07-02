CREATE OR REPLACE FUNCTION markAdvertisementAsRemoved()
RETURNS TRIGGER AS $$
BEGIN
  NEW.removed = true;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER advertisementRemovalTrigger
BEFORE DELETE ON advertisement
FOR EACH ROW
EXECUTE FUNCTION markAdvertisementAsRemoved();


CREATE OR REPLACE FUNCTION update_book_review_likes() RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') THEN
        UPDATE book_review SET amount_likes = amount_likes + 1 WHERE book_review_id = NEW.book_review_id;
       RETURN NEW;
   ELSIF (TG_OP = 'DELETE') THEN
        UPDATE book_review SET amount_likes = amount_likes - 1 WHERE book_review_id = OLD.book_review_id;
        RETURN OLD;
	END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER like_trigger
AFTER INSERT OR DELETE ON "like"
FOR EACH ROW
EXECUTE FUNCTION update_book_review_likes();