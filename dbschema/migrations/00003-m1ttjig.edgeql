CREATE MIGRATION m1ttjignwplazsc3cnlx2nepu7ei3edyccaa5s4wptykwxplo7cmaq
    ONTO m1dnfcbbweaddvpxauzid3rsqao2vk6rg62w6ix2itse24gicdtwpa
{
  CREATE TYPE default::apodos {
      CREATE MULTI LINK User: default::User;
      CREATE REQUIRED PROPERTY name: std::str;
  };
};
