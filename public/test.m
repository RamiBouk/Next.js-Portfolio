pkg load image;
p = imread("./test.png");

redChannel = p(:, :, 1);
greenChannel = p(:, :, 2);
blueChannel = p(:, :, 3);

% Median Filter the channels:
redMF = medfilt2(redChannel, [3 3]);
greenMF = medfilt2(greenChannel, [3 3]);
blueMF = medfilt2(blueChannel, [3 3]);

rgbFixed = cat(3, redMF, greenMF, blueMF);
p=rgbFixed ;

redChannel = p(:, :, 1);
greenChannel = p(:, :, 2);
blueChannel = p(:, :, 3);

% Median Filter the channels:
redMF = medfilt2(redChannel, [3 3]);
greenMF = medfilt2(greenChannel, [3 3]);
blueMF = medfilt2(blueChannel, [3 3]);

rgbFixed = cat(3, redMF, greenMF, blueMF);

p=rgbFixed ;

redChannel = p(:, :, 1);
greenChannel = p(:, :, 2);
blueChannel = p(:, :, 3);

% Median Filter the channels:
redMF = medfilt2(redChannel, [3 3]);
greenMF = medfilt2(greenChannel, [3 3]);
blueMF = medfilt2(blueChannel, [3 3]);

rgbFixed = cat(3, redMF, greenMF, blueMF);

p=rgbFixed ;

redChannel = p(:, :, 1);
greenChannel = p(:, :, 2);
blueChannel = p(:, :, 3);

% Median Filter the channels:
redMF = medfilt2(redChannel, [3 3]);
greenMF = medfilt2(greenChannel, [3 3]);
blueMF = medfilt2(blueChannel, [3 3]);

rgbFixed = cat(3, redMF, greenMF, blueMF);

p=rgbFixed ;

redChannel = p(:, :, 1);
greenChannel = p(:, :, 2);
blueChannel = p(:, :, 3);

% Median Filter the channels:
redMF = medfilt2(redChannel, [3 3]);
greenMF = medfilt2(greenChannel, [3 3]);
blueMF = medfilt2(blueChannel, [3 3]);

rgbFixed = cat(3, redMF, greenMF, blueMF);
imwrite(rgbFixed,"./test.png")
imshow(rgbFixed);
pause;
