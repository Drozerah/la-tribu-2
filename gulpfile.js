import gulp from 'gulp'
import webp from 'gulp-webp'
import ttf2woff2 from 'gulp-ttf2woff2'

/**
 * GULP TASKS
 * Dummy task
 */
gulp.task('start', (done) => {
  console.log('[gulp][task][start]') // !DEBUG
  done()
})

/**
* PRE:DEV
* Convert images to WebP
* https://www.npmjs.com/package/gulp-webp
*/
gulp.task('webp', (done) => {
  gulp.src('./src/img/*.{jpg,jpeg,png,ico,svg}')
  .pipe(webp({
    preset: 'photo'
  }))
  .pipe(gulp.dest('./src/img/webp/'))
  done()
})

/**
* PRE:DEV
* Create a WOFF2 font from a TTF font
* @doc https://www.npmjs.com/package/gulp-ttf2woff2
*/
gulp.task('ttf2woff2', (done) => {
  gulp.src(['./src/fonts/*.ttf'])
    .pipe(ttf2woff2())
    .pipe(gulp.dest('./fonts/dev/'))
    done()
})
