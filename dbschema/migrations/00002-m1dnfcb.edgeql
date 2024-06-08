CREATE MIGRATION m1dnfcbbweaddvpxauzid3rsqao2vk6rg62w6ix2itse24gicdtwpa
    ONTO m14ux7gcynbvnc2jgqyab5ycxfm56lmbwjlbceaxvcrq3rd47lc6vq
{
  CREATE TYPE default::User {
      CREATE MULTI LINK Task: default::Task;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY password: std::str;
  };
};
