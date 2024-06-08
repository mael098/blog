CREATE MIGRATION m1guvba3nduavmpv5lapauaeaf6jsleanowsgfx2nznkbmtcz7risa
    ONTO m1dhdvqjar4nj6pfwilcfxjwggzlcyjbue3rqktoi6o4ykzwxkplza
{
  ALTER TYPE default::Task {
      CREATE LINK user: default::User;
  };
  ALTER TYPE default::User {
      CREATE MULTI LINK tasks := (.<user[IS default::Task]);
  };
  ALTER TYPE default::User {
      DROP LINK Task;
  };
  ALTER TYPE default::apodos {
      ALTER LINK User {
          RENAME TO users;
      };
  };
};
