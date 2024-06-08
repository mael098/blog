module default {
    type Task {
        required title: str;
        required description: str;
        required completed: bool {
            default := false;
        }
        link user -> User;
    }
    
    type User {
        required name: str;
        required email: str;
        required password: str;
        multi link tasks := .<user[is Task];
    }
    
    type apodos {
        required name: str;
        multi link users -> User;
    }
}
