module default {
    type Task {
        required title: str;
        required description: str;
        required completed: bool {
            default:= false;
        }
    }
    type User {
        required name: str;
        required email: str;
        required password: str;
        multi link Task: Task;
    }
    type apodos {
        required name: str;
        multi link User: User;
    }
}
