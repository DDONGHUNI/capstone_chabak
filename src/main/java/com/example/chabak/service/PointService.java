package com.example.chabak.service;

import com.example.chabak.model.PointEntry;
import com.example.chabak.repository.PointEntryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PointService {

    @Autowired
    PointEntryRepository pointEntryRepository;

    @Transactional
    public void write(PointEntry pointEntry) { // title, content
        pointEntryRepository.save(pointEntry);
    }

    @Transactional
    public List<PointEntry> pointEntryList(){
        return pointEntryRepository.findAll();
    }


}
