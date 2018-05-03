import com.twilio.Twilio;
import com.twilio.rest.video.v1.Room;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String API_KEY_SID = "SKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String API_KEY_SECRET = "your_api_key_secret";

    public static void main(String args[]) {
        // Initialize the client
        Twilio.init(API_KEY_SID, API_KEY_SECRET);

        Room room = Room.creator().setUniqueName("DailyStandup").create();

        System.out.println(room.getSid());
    }

}
