CREATE MIGRATION m1dhdvqjar4nj6pfwilcfxjwggzlcyjbue3rqktoi6o4ykzwxkplza
    ONTO m1hkoz6uwpxhncgftyn34nhllpvkhy4kfzzaxivy2faphubwsn6rrq
{
  CREATE TYPE default::User {
      CREATE MULTI LINK Task: default::Task;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY password: std::str;
  };
  CREATE TYPE default::apodos {
      CREATE MULTI LINK User: default::User;
      CREATE REQUIRED PROPERTY name: std::str;
  };
};
