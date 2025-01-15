package com.nominori.limorentbackend.model.dao;

import com.nominori.limorentbackend.model.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageDbRepository extends JpaRepository<Image, Long> {}