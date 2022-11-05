const express = require('express');
const router = express.Router();
const AbsensiModel = require('../models/absensi');

// routing endpoint absensi utama
router.get('/', async (req, res) => {
  const absensi = await AbsensiModel.findAll();
  res.status(200).json({
    data: absensi,
    metadata: 'test absensi endpoint',
  });
});

router.post('/checkin', async (req, res) => {
  const { nip } = req.body;
  const absensi = await AbsensiModel.create({
    users_nip: nip,
    status: 'in',
  });

  res.status(200).json({
    data: absensi,
    metadata: 'test absensi endpoint',
  });
  res.status(400).json({
    error: 'data invalid',
  });
});

module.exports = router;
