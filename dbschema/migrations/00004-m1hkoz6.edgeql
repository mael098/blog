CREATE MIGRATION m1hkoz6uwpxhncgftyn34nhllpvkhy4kfzzaxivy2faphubwsn6rrq
    ONTO m1ttjignwplazsc3cnlx2nepu7ei3edyccaa5s4wptykwxplo7cmaq
{
  ALTER TYPE default::User {
      DROP LINK Task;
      DROP PROPERTY email;
      DROP PROPERTY name;
      DROP PROPERTY password;
  };
  DROP TYPE default::apodos;
  DROP TYPE default::User;
};
