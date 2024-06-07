CREATE MIGRATION m14ux7gcynbvnc2jgqyab5ycxfm56lmbwjlbceaxvcrq3rd47lc6vq
    ONTO initial
{
  CREATE TYPE default::Task {
      CREATE REQUIRED PROPERTY completed: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY title: std::str;
  };
};
