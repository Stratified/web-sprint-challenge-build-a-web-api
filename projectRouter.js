const express = require('express');
const router = express.Router();

const projects = require('./data/helpers/projectModel');

router.get('/', (req, res) => {
	res.status(200).json({ message: 'Main page.' });
});

router.get('/projects', (req, res) => {
	projects
		.get()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

router.get('/projects/:id', (req, res) => {
	projects
		.get(req.params.id)
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
});

router.post('/projects', (req, res) => {
	projects
		.insert(req.body)
		.then((project) => {
			res.status(201).json(project);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/projects/:id/actions', (req, res) => {
	projects
		.getProjectActions(req.params.id)
		.then((actions) => {
			res.status(200).json(actions);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.put('/projects/:id', (req, res) => {
	projects
		.update(req.params.id, req.body)
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.delete('/projects/:id', (req, res) => {
	projects
		.remove(req.params.id)
		.then((res) => {
			res.status(204).json({ message: 'Project successfully removed.' });
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});
