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
