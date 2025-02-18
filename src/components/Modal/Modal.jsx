import { useEffect, useState } from "react";
import st from "./Modal.module.scss";
import { useFormik } from "formik";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { statusNames } from "../../utills";
export default function Modal({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      project: "",
      dateTime: "",
      startTime: "",
      endTime: "",
      priority: "",
      assignee: "",
      status: statusNames.TODO,
    },
    onSubmit: (values) => {
      addTask({
        id: Date.now(),
        name: values.name,
        description: values.description,
        project: values.project,
        dateTime: `${values.dateTime} ${values.startTime} - ${values.endTime}`,
        priority: values.priority,
        assignee: values.assignee,
        status: values.status,
      });
      handleClose();
    },
  });

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={st.root}>
      {!isOpen && (
        <button className={st.addButton} onClick={handleOpen}>
          + Add Task
        </button>
      )}
      {isOpen && (
        <form onSubmit={formik.handleSubmit} className={st.modal}>
          <Container
            maxWidth="sm"
            style={{
              backgroundColor: "#fff",
              padding: "75px 30px 50px 40px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              width: "600px",
              position: "relative",
              margin: "0",
            }}
          >
            <CloseIcon
              type="button"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                fontSize: "18px",
                color: "#0D062D",
                cursor: "pointer",
                borderRadius: "30%",
                background: "rgba(120, 116, 134, 0.2)",
                width: "32px",
                height: "32px",
              }}
            >
              <span className="material-icons">close</span>
            </CloseIcon>
            <div className={st.topRow}>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  margin: "0 0 27px 0",
                  fontSize: "36px",
                  fontWeight: "500",
                  lineHeight: "43.57px",
                  color: "#0D062D",
                }}
              >
                Add Task
              </Typography>
              <Typography
                variant="body2"
                align="right"
                gutterBottom
                style={{
                  margin: "0",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "19.36px",
                  color: "#787486",
                }}
              >
                Today {currentDate}
              </Typography>
            </div>
            <InputLabel
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "19.36px",
                marginBottom: "14px",
                color: "#0D062D",
              }}
            >
              Name the task
            </InputLabel>
            <TextField
              style={{
                marginBottom: "20px",
              }}
              variant="outlined"
              fullWidth
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <InputLabel
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "19.36px",
                marginBottom: "14px",
                color: "#0D062D",
              }}
            >
              Description
            </InputLabel>
            <TextField
              style={{
                marginBottom: "20px",
              }}
              variant="outlined"
              fullWidth
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <InputLabel
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "19.36px",
                marginBottom: "13px",
                color: "#0D062D",
              }}
            >
              Project name
            </InputLabel>
            <TextField
              style={{
                marginBottom: "20px",
              }}
              variant="outlined"
              fullWidth
              id="project"
              name="project"
              value={formik.values.project}
              onChange={formik.handleChange}
            />
            <Grid
              container
              spacing={2}
              style={{
                alignItems: "end",
                margin: "0 auto 20px",
                justifyContent: "space-between",
                maxWidth: "530px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{ padding: "0", maxWidth: "240px" }}
              >
                <InputLabel
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "19.36px",
                    marginBottom: "13px",
                    color: "#0D062D",
                  }}
                >
                  Due Date/Time
                </InputLabel>
                <TextField
                  type="date"
                  variant="outlined"
                  fullWidth
                  id="dateTime"
                  name="dateTime"
                  value={formik.values.dateTime}
                  onChange={formik.handleChange}
                  style={{
                    fontWeight: "500",
                    fontSize: "14.57px",
                    lineHeight: "17.64px",
                    letterSpacing: "0%",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                style={{ padding: "0", maxWidth: "100px" }}
              >
                <TextField
                  label="Start Time"
                  type="time"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  id="startTime"
                  name="startTime"
                  value={formik.values.startTime}
                  onChange={formik.handleChange}
                  style={{
                    maxWidth: "100px",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                style={{ padding: "0", maxWidth: "100px" }}
              >
                <TextField
                  label="End Time"
                  type="time"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  id="endTime"
                  name="endTime"
                  value={formik.values.endTime}
                  onChange={formik.handleChange}
                  style={{
                    maxWidth: "100px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              style={{
                margin: "0 auto 78px",
                justifyContent: "space-between",
                maxWidth: "530px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{ padding: "0", maxWidth: "240px", margin: "0" }}
              >
                <InputLabel
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "19.36px",
                    marginBottom: "13px",
                    color: "#0D062D",
                  }}
                >
                  Task Priority
                </InputLabel>
                <Select
                  style={{
                    marginBottom: "20px",
                  }}
                  variant="outlined"
                  fullWidth
                  id="priority"
                  name="priority"
                  value={formik.values.priority}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ padding: "0", maxWidth: "240px" }}
              >
                <InputLabel
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "19.36px",
                    marginBottom: "14px",
                    color: "#0D062D",
                  }}
                >
                  Task Assignee
                </InputLabel>
                <TextField
                  style={{ margin: "0" }}
                  variant="outlined"
                  fullWidth
                  id="assignee"
                  name="assignee"
                  value={formik.values.assignee}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Grid item style={{ padding: "0" }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: "none",
                    padding: "15px 71px",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "19.36px",
                    letteSrpacing: "0%",
                    color: "#fff",
                    marginBottom: "20px",
                  }}
                  type="submit"
                >
                  Save
                </Button>
              </Grid>
              <Grid item style={{ padding: "0" }}>
                <Button
                  type="button"
                  onClick={handleClose}
                  style={{
                    fontWeight: "500",
                    fontSize: "14.57px",
                    lineHeight: "17.64px",
                    letteSrpacing: "0%",
                    color: "#0D062D",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      )}
    </div>
  );
}
