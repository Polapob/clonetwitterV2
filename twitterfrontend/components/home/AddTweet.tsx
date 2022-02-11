import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import PublicIcon from "@mui/icons-material/Public";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const AddTweet = () => {
  return (
    <Box
      sx={{
        marginTop: "55px",
        width: "600px",
        padding: "12px",
        paddingLeft: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            border: "2px solid white",
            width: "44px",
            height: "44px",
            borderRadius: "2rem",
            marginRight: "12px",
          }}
        ></Box>
        <InputBase
          sx={{
            color: "white",
            width: "500px",
            "textarea::placeholder": {
              fontSize: "18px",
            },
          }}
          placeholder="What's happenning?"
          multiline
        />
      </Box>
      <Box
        sx={{
          borderBottom: "0.5px solid rgb(47, 51, 54)",
          width: "full",
          marginLeft: "50px",
        }}
      >
        <Button
          disableRipple
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "13px",
            marginBottom: "8px",
            borderRadius: "2rem",
            ":hover": {
              backgroundColor: "rgba(29, 155, 240, 0.1)",
            },
          }}
        >
          <PublicIcon sx={{ fontSize: "17px", color: "rgb(29, 155, 240)" }} />
          <Typography
            sx={{
              marginLeft: "4px",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "13px",
              color: "rgb(29, 155, 240)",
            }}
          >
            Everyone can reply
          </Typography>
        </Button>
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "full",
          marginLeft: "50px",
          border: "0px solid white",
          paddingLeft: "0px",
          paddingTop: "12px",
        }}
      >
        <Stack
          direction="row"
          spacing={0}
          sx={{
            justifyContent: "start",
            margin: 0,
          }}
        >
          <IconButton
            sx={{
              maxWidth: "fit-content",
              border: "0px solid white",
              width: "38px",
              height: "38px",
            }}
          >
            <InsertPhotoOutlinedIcon
              sx={{
                color: "rgb(29, 155, 240)",
                padding: "7px",
                borderRadius: "2rem",
                fontSize: "38px",
                ":hover": {
                  backgroundColor: "rgba(29, 155, 240,0.1)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              maxWidth: "fit-content",
              border: "0px solid white",
              width: "38px",
              height: "38px",
            }}
          >
            <GifBoxOutlinedIcon
              sx={{
                color: "rgb(29, 155, 240)",
                padding: "7px",
                borderRadius: "2rem",
                fontSize: "38px",
                ":hover": {
                  backgroundColor: "rgba(29, 155, 240,0.1)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              maxWidth: "fit-content",
              border: "0px solid white",
              width: "38px",
              height: "38px",
            }}
          >
            <AlignHorizontalLeftOutlinedIcon
              sx={{
                color: "rgb(29, 155, 240)",
                padding: "7px",
                borderRadius: "2rem",
                fontSize: "38px",
                ":hover": {
                  backgroundColor: "rgba(29, 155, 240,0.1)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              maxWidth: "fit-content",
              border: "0px solid white",
              width: "38px",
              height: "38px",
            }}
          >
            <SentimentSatisfiedOutlinedIcon
              sx={{
                color: "rgb(29, 155, 240)",
                padding: "7px",
                borderRadius: "2rem",
                fontSize: "38px",
                ":hover": {
                  backgroundColor: "rgba(29, 155, 240,0.1)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              maxWidth: "fit-content",
              border: "0px solid white",
              width: "38px",
              height: "38px",
            }}
          >
            <EventNoteOutlinedIcon 
              sx={{
                color: "rgb(29, 155, 240)",
                padding: "7px",
                borderRadius: "2rem",
                fontSize: "38px",
                ":hover": {
                  backgroundColor: "rgba(29, 155, 240,0.1)",
                },
              }}
            />
          </IconButton>
          <IconButton
            disabled
            sx={{
              maxWidth: "fit-content",
              border: "0px solid white",
              width: "38px",
              height: "38px",
              ":disabled": {
                opacity: 0.5,
              },
            }}
          >
            <FmdGoodOutlinedIcon
              sx={{
                color: "rgb(29, 155, 240)",
                padding: "7px",
                borderRadius: "2rem",
                fontSize: "38px",
                ":hover": {
                  backgroundColor: "rgba(29, 155, 240,0.1)",
                },
              }}
            />
          </IconButton>
        </Stack>

        <Button
          disabled
          disableRipple
          sx={{
            backgroundColor: "rgb(29, 155, 240)",
            color: "white",
            borderRadius: "2rem",
            textTransform: "capitalize",
            paddingLeft: "16px",
            paddingRight: "16px",
            fontSize: "15px",
            fontWeight: "bold",
            ":disabled": {
              opacity: 0.5,
              color: "white",
            },
          }}
        >
          Tweet
        </Button>
      </Stack>
    </Box>
  );
};
export default AddTweet;
